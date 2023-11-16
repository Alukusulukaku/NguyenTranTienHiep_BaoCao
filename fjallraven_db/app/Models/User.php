<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    use HasFactory;
    protected $table = 'db_users';
    public function wishlist(): HasMany
    {
        return $this->hasMany(Wishlist::class);
    }
    public function order(): HasMany
    {
        return $this->hasMany(Order::class);
    }
    public function cart(): HasMany
    {
        return $this->hasMany(Cart::class);
    }
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'created_by');
    }
}
