<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('avatar')->nullable()->default('/avatars/default.webp');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_blocked')->default(false);
            // $table->date('blocked_at')->nullable()->default(null);
            $table->unsignedBigInteger('role_id')->index()->default(1);
            $table->rememberToken();
            $table->timestamps();
        });

        // Допустимо - но лучше делать через механизм Seed
        DB::table('users')->insert([
            'id' => 'ad2bbd00-68cc-4c1f-8fac-92192882884d',
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' =>  Hash::make('QweAsdZxc!23'),
            'role_id' => 2
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
