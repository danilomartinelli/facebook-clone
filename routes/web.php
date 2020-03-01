<?php

Auth::routes();

Route::get('/dashboard/{any}', 'AppController@index')->where('any', '.*')->middleware('auth')->name('home');
