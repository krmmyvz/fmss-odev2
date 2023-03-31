# 2. Ödev (To Do App)
Patika.dev &amp; FMSS Bilişim Front-end Practicum Hafta 2 - 2. Ödev
Patika.dev linkim: "https://app.patika.dev/keremyvz"

## Açıklama

Bu basit React uygulaması, bir kullanıcının yapması gereken görevleri kolayca takip edebilmesi için tasarlanmıştır. Kullanıcılar, uygulama aracılığıyla görev ekleyebilir, tamamlandığında işaretleyebilir ve silinebilir.

![Ekran Görüntüsü](https://github.com/krmmyvz/fmss-odev1/blob/main/Console%20Output.png)

## Özellikler

- Kullanıcılar görev ekleyebilir ve tamamlandıklarında işaretleyebilir.
- Kullanıcılar tamamlanmış görevleri silebilirler.
- Uygulama, her bir görevin tamamlanıp tamamlanmadığını takip eder ve görevlerin durumlarına göre uygun şekilde gösterir.
- Kullanıcıların görevleri yerel depolamada saklanır, böylece sayfayı yenilese bile görevler kaybolmaz.

## Kurulum

1. Bu uygulamayı yerel olarak çalıştırmak için, öncelikle bu projeyi kopyalayın veya indirin.
2. `npm install` komutunu çalıştırarak gerekli bağımlılıkları yükleyin.
3. `npm start` komutunu çalıştırarak konsol uygulamasını başlatın. Uygulama,  [link](http://localhost:3000).adresinde çalışacaktır.

### Fonksiyon Açıklaması

Bu ödevde, default olarak dışa aktarılan ve async olarak tanımlanan bir fonksiyon yazmanız gerekmektedir. Bu fonksiyon, Number tipinde bir parametre almalı ve bu parametre user id'yi belirtmelidir. Fonksiyonun görevi, verilen user id'ye göre ilgili kullanıcının verilerini ve post'larını API'dan çekerek, bu verileri birleştirip bir obje olarak return etmektir.

Fonksiyon içerisinde, axios kütüphanesi kullanılarak iki farklı API çağrısı yapılmaktadır. İlk olarak, user bilgileri için "https://jsonplaceholder.typicode.com/users/{user_id}" endpoint'i kullanılır. Burada, '{user_id}' yerine parametredeki user id değeri yazılmalıdır. İkinci olarak, ilgili kullanıcının post'ları için "https://jsonplaceholder.typicode.com/posts?userId={user_id}" endpoint'i kullanılır. Yine burada, '{user_id}' yerine parametredeki user id değeri yazılmalıdır.

Bu iki API çağrısı sonucu elde edilen veriler, birleştirilerek aşağıdaki gibi bir obje olarak return edilir:

```javascript
{
  id: user_id,
  name: user_name,
  username: user_username,
  email: user_email,
  posts: [
    {
      id: post_id,
      title: post_title,
      body: post_body
    },
    ...
  ]
}

