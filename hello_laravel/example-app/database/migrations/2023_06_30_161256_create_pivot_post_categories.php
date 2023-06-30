<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pivot_post_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('category_id');

            // Установка ключей для взаимосвязи с внешними таблицами
            $table->foreign('post_id')->references('id')
                ->on('posts');
            $table->foreign('category_id')->references('id')
                ->on('categories');

            // Такой ключ дает гарантию, что пара будет уникальной
            // это исключит дублирование записей
            $table->unique(['post_id', 'category_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pivot_post_categories');
    }
};
