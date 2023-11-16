<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory;
    protected $table = 'db_product';
    public function orderdetail(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }
    public function productimage(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }
    public function wishlist(): HasMany
    {
        return $this->hasMany(Wishlist::class);
    }
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function productsale(): HasMany
    {
        return $this->hasMany(ProductSale::class);
    }
    public function productstore(): HasOne
    {
        return $this->hasOne(ProductStore::class, 'product_id');
    }
    public function review(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
