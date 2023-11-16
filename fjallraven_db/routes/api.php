<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductSaleController;
use App\Http\Controllers\Api\ProductStoreController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WishlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*----------------------*/
/* Brands */

Route::prefix('brand')->group(function () {
    Route::get('index/{status}/{limit}/{page?}', [BrandController::class, 'index']);
    Route::get('getAll/{status?}', [BrandController::class, 'getAll']);
    Route::get('show/{id}', [BrandController::class, 'show']);
    Route::post('store', [BrandController::class, 'store']);
    Route::post('update/{id}', [BrandController::class, 'update']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);
});

/*----------------------*/
/* Cart */

Route::prefix('cart')->group(function () {
    Route::get('index/{user_id}', [CartController::class, 'index']);
    Route::post('store', [CartController::class, 'store']);
    Route::post('update', [CartController::class, 'update']);
    Route::delete('destroy/{id}', [CartController::class, 'destroy']);
});

/*----------------------*/
/* Category */

Route::prefix('category')->group(function () {
    Route::get('index/{limit}/{page?}', [CategoryController::class, 'index']);
    Route::get('categoryExceptById/{id}', [CategoryController::class, 'categoryExceptById']);
    Route::get('getAllWithChildren', [CategoryController::class, 'getAllWithChildren']);
    Route::get('all/{status?}', [CategoryController::class, 'getAll']);
    Route::get('show/{id}', [CategoryController::class, 'show']);
    Route::get('getBySlug/{slug}', [CategoryController::class, 'getBySlug']);
    Route::post('store', [CategoryController::class, 'store']);
    Route::post('update/{id}', [CategoryController::class, 'update']);
    Route::get('category_list/{parent_id?}/{status?}', [CategoryController::class, 'category_list']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
});


/*----------------------*/
/* Contact */

Route::prefix('contact')->group(function () {
    Route::get('index/{limit}/{page?}', [ContactController::class, 'index']);
    Route::get('show/{id}', [ContactController::class, 'show']);
    Route::post('store', [ContactController::class, 'store']);
    Route::post('update/{id}', [ContactController::class, 'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
});

/*----------------------*/
/* Menu */

Route::prefix('menu')->group(function () {
    Route::get('index/{limit}/{page?}', [MenuController::class, 'index']);
    Route::get('all', [MenuController::class, 'all']);

    Route::get('getMenu/{type}/{status?}', [MenuController::class, 'getMenu']);
    Route::get('getMenuByParentID/{table_id}/{type}/{status?}', [MenuController::class, 'getMenuByParentID']);
    Route::get('show/{id}', [MenuController::class, 'show']);
    Route::post('store', [MenuController::class, 'store']);
    Route::post('update/{id}', [MenuController::class, 'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
});

/*----------------------*/
/* Order */

Route::prefix('order')->group(function () {
    Route::post('index/{limit}/{page?}', [OrderController::class, 'index']);
    Route::get('show/{id}', [OrderController::class, 'show']);
    Route::post('store', [OrderController::class, 'store']);
    Route::post('update/{id}', [OrderController::class, 'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
});

/*----------------------*/
/* Post */

Route::prefix('post')->group(function () {
    Route::get('index/{limit}/{page?}', [PostController::class, 'index']);

    Route::get('post_list/{slug}/{limit}/{page?}', [PostController::class, 'post_list']);
    Route::get('postByLimit/{limit}', [PostController::class, 'postByLimit']);
    Route::get('post_detail/{topic}/{slug}', [PostController::class, 'post_detail']);
    Route::get('getByStatus/{status}', [PostController::class, 'getByStatus']);
    Route::get('post_all/{limit}/{page?}', [PostController::class, 'post_all']);
    Route::get('post_topic/{topic_id}/{limit}/{page?}', [PostController::class, 'post_topic']);
    Route::get('show/{id}', [PostController::class, 'show']);
    Route::get('post_other/{id}/{limit}', [PostController::class, 'post_other']);
    Route::get('postByTopic/{slug}/{limit}', [PostController::class, 'postByTopic']);
    Route::post('store', [PostController::class, 'store']);
    Route::post('update/{id}', [PostController::class, 'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);
});

Route::prefix('review')->group(function () {
    Route::post('store', [ReviewController::class, 'store']);
    Route::get('getReviewsByProductId/{id}', [ReviewController::class, 'getReviewsByProductId']);
    Route::delete('destroy/{id}', [ReviewController::class, 'destroy']);
});

Route::prefix('page')->group(function () {
    Route::get('index/{limit}/{page?}', [PageController::class, 'index']);
    Route::get('index_rev', [PageController::class, 'index_rev']);
    Route::get('show/{id}', [PageController::class, 'show']);
    Route::post('store', [PageController::class, 'store']);
    Route::post('update/{id}', [PageController::class, 'update']);
    Route::delete('destroy/{id}', [PageController::class, 'destroy']);
    Route::get('getBySlug/{slug}', [PageController::class, 'getBySlug']);
});

/*----------------------*/
/* Product */

Route::prefix('product')->group(function () {
    Route::get('index/{status}/{limit}/{page?}', [ProductController::class, 'index']);
    Route::post('store', [ProductController::class, 'store']);
    Route::get('getProductBySlug/{category}/{slug}', [ProductController::class, 'getProductBySlug']);
    Route::post('filterProductsPagination/{page?}/{limit}', [ProductController::class, 'filterProductsPagination']);
    Route::post('filterProducts', [ProductController::class, 'filterProducts']);
    Route::get('test', [ProductController::class, 'test']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
    Route::delete('saleRemove/{id}', [ProductSaleController::class, 'destroy']);
    Route::post('update/{id}', [ProductController::class, 'update']);
    Route::get('show/{id}', [ProductController::class, 'show']);
    Route::post('sale_store', [ProductSaleController::class, 'store']);
    Route::post('stock_add', [ProductStoreController::class, 'storeUpdate']);
    Route::post('productBySearch', [ProductController::class, 'productBySearch']);
});

/*----------------------*/
/* Slider */

Route::prefix('slider')->group(function () {
    Route::get('index/{limit}/{page?}', [SliderController::class, 'index']);
    Route::get('getSliderByPosition/{position}/{status?}', [SliderController::class, 'getSliderByPosition']);
    Route::get('show/{id}', [SliderController::class, 'show']);
    Route::post('store', [SliderController::class, 'store']);
    Route::post('update/{id}', [SliderController::class, 'update']);
    Route::delete('destroy/{id}', [SliderController::class, 'destroy']);
});

/*----------------------*/
/* Topic */
Route::prefix('topic')->group(function () {
    Route::get('index/{limit}/{page?}', [TopicController::class, 'index']);
    Route::get('all', [TopicController::class, 'all']);
    Route::get('show/{id}', [TopicController::class, 'show']);
    Route::post('store', [TopicController::class, 'store']);
    Route::post('update/{id}', [TopicController::class, 'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);
    Route::post('TrashOrRestore/{id}/{tor}', [TopicController::class, 'TrashOrRestore']);
});



/*----------------------*/
/* User */

Route::prefix('user')->group(function () {
    Route::get('index/{roles}/{limit}/{page?}/{status}', [UserController::class, 'index']);
    Route::get('show/{id}', [UserController::class, 'show']);
    Route::post('store', [UserController::class, 'store']);
    Route::post('login', [UserController::class, 'login']);
    Route::post('update/{id}', [UserController::class, 'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);
});

/*----------------------*/
/* Wishlist */

Route::prefix('wishlist')->group(function () {
    Route::get('index', [WishlistController::class, 'index']);
    Route::get('show/{id}', [WishlistController::class, 'show']);
    Route::post('store', [WishlistController::class, 'store']);
    Route::delete('destroy/{id}', [WishlistController::class, 'destroy']);
});

/*----------------------- frontend ------------------------*/
/*---------------------*/
/* Product */
Route::get('product_category/{category_id}/{limit}/{page?}', [ProductController::class, 'product_category']);
Route::get('product_brand/{brand_id}/{limit}/{page?}', [ProductController::class, 'product_brand']);
Route::get('getProducts/{id}/{limit}', [ProductController::class, 'getProducts']);
Route::get('getLatestProducts/{limit}', [ProductController::class, 'getLatestProducts']);
Route::get('getTrendingProducts/{limit}', [ProductController::class, 'getTrendingProducts']);
Route::get('getSaleProducts/{limit}', [ProductController::class, 'getSaleProducts']);



/*---------------------*/
/* Slider */
Route::get('getSliderByPosition/{position}/{status?}', [SliderController::class, 'getSliderByPosition']);

/*------------------- */
Route::get('getMenus', [MenuController::class, 'getMenus']);
