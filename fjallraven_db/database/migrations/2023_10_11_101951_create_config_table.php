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
        Schema::create('db_config', function (Blueprint $table) {
            $table->id();
            $table->string('author',1000);
            $table->string('email',1000);
            $table->string('phone',1000);
            $table->string('zalo',1000);
            $table->string('facebook',1000);
            $table->string('address',1000);
            $table->string('youtube',1000);
            $table->string('metadesc',1000);
            $table->string('metakey',1000);
            $table->unsignedInteger('created_by')->default(0);
            $table->unsignedInteger('updated_by')->default(0);
            $table->tinyInteger('status')->default(2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_config');
    }
};