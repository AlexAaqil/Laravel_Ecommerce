<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = Hash::make('password');

        $user_records = [
            [
                'first_name' => 'Admin',
                'last_name' => 'Administrator',
                'email' => 'admin@gmail.com',
                'user_level' => 1,
                'password' => $password
            ],
            [
                'first_name' => 'User',
                'last_name' => 'Test',
                'email' => 'user@gmail.com',
                'user_level' => 2,
                'password' => $password
            ]
        ];

        foreach($user_records as $user_record) {
            User::create($user_record);
        }
    }
}
