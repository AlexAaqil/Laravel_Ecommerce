<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use App\Models\Category;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });

        parent::boot();
        Route::bind('categories', function ($value, $route) {
            try {
                // Check if the current route is the "show" route
                if ($route->getName() === 'categories.show') {
                    // Use slug for the show method
                    return Category::where('slug', $value)->first();
                }

                // For other routes, use default binding (id)
                return Category::find($value);
            } catch (ModelNotFoundException $e) {
                // Handle the case where the model is not found
                echo 'Category not found. Please check the slug and try again.';
            } catch (NotFoundHttpException $e) {
                // Handle the case where the route is not found
                echo 'Route not found. Please check the URL and try again.';
            }
        });
    }
}
