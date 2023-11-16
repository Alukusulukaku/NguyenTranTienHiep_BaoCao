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
        Schema::create('db_productstore', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('product_id');
            $table->double('price');
            $table->unsignedInteger('qty');
            $table->unsignedInteger('created_by')->default(0);
            $table->timestamps();
            $table->unsignedInteger('updated_by')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_productstore');
    }
};