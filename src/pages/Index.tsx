import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      title: "Романтичный букет",
      category: "Букеты",
      price: "3,500 ₽",
      image: "/img/f72ff780-6716-4b47-96ba-19cfb0ecd5d2.jpg",
      description: "Нежные розы и пионы в пастельных тонах"
    },
    {
      id: 2,
      title: "Весенняя композиция",
      category: "Композиции",
      price: "4,200 ₽",
      image: "/img/6e205f48-b1d9-4bf2-9fa1-4647e31daba3.jpg",
      description: "Элегантная композиция в стеклянной вазе"
    },
    {
      id: 3,
      title: "Подарочная коробка",
      category: "Букеты",
      price: "5,800 ₽",
      image: "/img/d02a4d66-3d87-4d44-a28b-454aa3cf083e.jpg",
      description: "Премиум букет в дизайнерской упаковке"
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'Grid3X3' },
    { id: 'bouquets', label: 'Букеты', icon: 'Flower' },
    { id: 'compositions', label: 'Композиции', icon: 'Gift' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-background via-muted/30 to-accent/20 py-20 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <div className="mb-8 animate-fade-in">
                  <img 
                    src="/img/92df5a34-c228-49a3-8c65-9b6c82322293.jpg" 
                    alt="Цветочная композиция"
                    className="mx-auto w-full max-w-md md:max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                  />
                </div>
                <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
                  OA Flowers
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Создаём нежные букеты и композиции для особенных моментов вашей жизни
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-3 hover-scale"
                  onClick={() => setActiveSection('catalog')}
                >
                  <Icon name="Flower" className="mr-2" />
                  Посмотреть каталог
                </Button>
              </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-playfair text-4xl font-semibold text-center mb-12">
                  Популярные букеты
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <Card key={product.id} className="group hover-scale overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair text-xl font-semibold">{product.title}</h3>
                          <span className="text-primary font-semibold">{product.price}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        <Button className="w-full">
                          <Icon name="ShoppingBag" className="mr-2" />
                          В корзину
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-muted/30 py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Truck" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Быстрая доставка</h3>
                    <p className="text-muted-foreground">Доставляем по Москве в течение 2-3 часов</p>
                  </div>
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Flower2" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Свежие цветы</h3>
                    <p className="text-muted-foreground">Используем только свежие цветы от проверенных поставщиков</p>
                  </div>
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Heart" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">Создаём букеты по вашим пожеланиям</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'catalog':
      case 'bouquets':
      case 'compositions':
        const filteredProducts = activeSection === 'catalog' 
          ? products 
          : products.filter(p => p.category.toLowerCase() === (activeSection === 'bouquets' ? 'букеты' : 'композиции'));

        return (
          <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="font-playfair text-4xl font-bold text-center mb-12">
                {activeSection === 'catalog' && 'Каталог'}
                {activeSection === 'bouquets' && 'Букеты'}
                {activeSection === 'compositions' && 'Композиции'}
              </h1>
              <div className="grid md:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover-scale overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair text-xl font-semibold">{product.title}</h3>
                        <span className="text-primary font-semibold">{product.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <Button className="w-full">
                        <Icon name="ShoppingBag" className="mr-2" />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'delivery':
        return (
          <div className="min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl font-bold text-center mb-12">Доставка</h1>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name="Clock" className="text-primary mr-3" />
                    <h3 className="font-playfair text-xl font-semibold">Время доставки</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Стандартная доставка: 2-3 часа<br/>
                    Экспресс доставка: 1 час<br/>
                    Доставка к определённому времени
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name="MapPin" className="text-primary mr-3" />
                    <h3 className="font-playfair text-xl font-semibold">Зоны доставки</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Москва в пределах МКАД: 500 ₽<br/>
                    За МКАД до 20 км: 800 ₽<br/>
                    Подмосковье: от 1000 ₽
                  </p>
                </Card>
              </div>

              <Card className="p-8 text-center bg-gradient-to-r from-accent/20 to-secondary/20">
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  Бесплатная доставка
                </h3>
                <p className="text-muted-foreground mb-4">
                  При заказе от 5000 ₽ доставка по Москве бесплатно
                </p>
                <Button size="lg">
                  <Icon name="Gift" className="mr-2" />
                  Оформить заказ
                </Button>
              </Card>
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl font-bold text-center mb-12">Контакты</h1>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Card className="p-6 mb-6">
                    <h3 className="font-playfair text-xl font-semibold mb-4">Свяжитесь с нами</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Icon name="Phone" className="text-primary mr-3" />
                        <span>+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Mail" className="text-primary mr-3" />
                        <span>info@oaflowers.ru</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" className="text-primary mr-3" />
                        <span>Москва, ул. Цветочная, 15</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" className="text-primary mr-3" />
                        <span>Ежедневно с 9:00 до 21:00</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-4">Социальные сети</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon">
                        <Icon name="Instagram" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Facebook" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="MessageCircle" />
                      </Button>
                    </div>
                  </Card>
                </div>

                <Card className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button type="submit" className="w-full">
                      <Icon name="Send" className="mr-2" />
                      Отправить
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => setActiveSection('home')}
              className="font-playfair text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              OA Flowers
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderContent()}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden">
        <div className="flex items-center justify-around py-2">
          {navigationItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;