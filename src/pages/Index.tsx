import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { name: 'Электроника', icon: 'Smartphone', count: 1234 },
    { name: 'Одежда', icon: 'Shirt', count: 2567 },
    { name: 'Дом и сад', icon: 'Home', count: 987 },
    { name: 'Спорт', icon: 'Dumbbell', count: 654 },
    { name: 'Автомобили', icon: 'Car', count: 432 },
    { name: 'Книги', icon: 'Book', count: 876 },
    { name: 'Красота', icon: 'Sparkles', count: 543 },
    { name: 'Димка Викладина', icon: 'Crown', count: 99, special: true }
  ];

  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 45999, image: '/img/2085a5f0-c8bb-4376-8c37-faa25c7957c9.jpg', category: 'Электроника', rating: 4.8, reviews: 127 },
    { id: 2, name: 'Samsung Galaxy S24', price: 38999, image: '/img/2085a5f0-c8bb-4376-8c37-faa25c7957c9.jpg', category: 'Электроника', rating: 4.7, reviews: 89 },
    { id: 3, name: 'MacBook Air M3', price: 89999, image: '/img/2085a5f0-c8bb-4376-8c37-faa25c7957c9.jpg', category: 'Электроника', rating: 4.9, reviews: 203 },
    { id: 4, name: 'Nike Air Max', price: 8999, image: '/img/2085a5f0-c8bb-4376-8c37-faa25c7957c9.jpg', category: 'Спорт', rating: 4.6, reviews: 156 },
    { id: 5, name: 'Авторская картина Димки', price: 15000, image: '/img/2085a5f0-c8bb-4376-8c37-faa25c7957c9.jpg', category: 'Димка Викладина', rating: 5.0, reviews: 42, special: true },
    { id: 6, name: 'Рукописный блокнот', price: 2999, image: '/img/2085a5f0-c8bb-4376-8c37-faa25c7957c9.jpg', category: 'Димка Викладина', rating: 4.9, reviews: 28, special: true }
  ];

  const addToCart = (productId: number) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-marketplace-blue">MARKETPLACE</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-marketplace-blue transition-colors">Главная</a>
                <a href="#" className="text-gray-700 hover:text-marketplace-blue transition-colors">Категории</a>
                <a href="#" className="text-gray-700 hover:text-marketplace-blue transition-colors">Акции</a>
                <a href="#" className="text-marketplace-dimka font-semibold hover:text-orange-600 transition-colors">Димка Викладина</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-10"
                />
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={18} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs rounded-full">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="User" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-marketplace-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Найди всё, что нужно</h2>
          <p className="text-xl mb-8 text-blue-100 animate-fade-in">Миллионы товаров по лучшим ценам</p>
          <div className="max-w-2xl mx-auto relative">
            <Input
              placeholder="Что ищете?"
              className="w-full h-12 pl-12 text-gray-900 text-lg"
            />
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Популярные категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${category.special ? 'ring-2 ring-marketplace-dimka' : ''}`}>
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${category.special ? 'bg-marketplace-dimka' : 'bg-marketplace-blue'}`}>
                    <Icon name={category.icon} className="text-white" size={24} />
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${category.special ? 'text-marketplace-dimka' : 'text-gray-900'}`}>
                    {category.name}
                  </h4>
                  <p className="text-xs text-gray-500">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Рекомендуемые товары</h3>
            <Button variant="outline">Показать все</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className={`overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105 ${product.special ? 'ring-2 ring-marketplace-dimka' : ''}`}>
                <div className="aspect-square bg-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.special && (
                    <Badge className="absolute top-2 left-2 bg-marketplace-dimka text-white">
                      <Icon name="Crown" size={12} className="mr-1" />
                      Димка
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="text-yellow-400" size={16} fill="currentColor" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-marketplace-blue">{product.price.toLocaleString()} ₽</span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className={product.special ? 'bg-marketplace-dimka hover:bg-orange-600' : ''}
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dimka Section */}
      <section className="py-16 bg-gradient-to-r from-marketplace-dimka to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Icon name="Crown" className="text-white mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-white mb-4">Раздел Димка Викладина</h3>
            <p className="text-xl text-orange-100 mb-8">Уникальные товары от нашего специального партнера</p>
            <Button size="lg" variant="outline" className="bg-white text-marketplace-dimka border-white hover:bg-gray-100">
              Перейти в раздел
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Компания</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как сделать заказ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Способы оплаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Партнерам</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Продавать на сайте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Программа лояльности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Димка Викладина</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 123 45 67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@marketplace.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Marketplace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;