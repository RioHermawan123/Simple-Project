        // Mengambil elemen gambar dan tombol
        var img = document.querySelector('.content-img');
        var prevBtn = document.querySelector('.prev-btn');
        var nextBtn = document.querySelector('.next-btn');
        
        // Membuat array dengan beberapa sumber gambar
        var imgSources = ['./assets/a.jpg', './assets/b.jpg', './assets/c.jpg', './assets/f.jpg','./assets/e.jpg' ];
        
        // Menentukan indeks gambar saat ini
        var currentIndex = 0;
        
        // Fungsi untuk mengganti gambar
        function changeImage() {
          img.src = imgSources[currentIndex];
        }
        
        // Fungsi untuk menggeser ke gambar sebelumnya
        function prevImage() {
          currentIndex = (currentIndex - 1 + imgSources.length) % imgSources.length;
          changeImage();
        }
        
        // Fungsi untuk menggeser ke gambar berikutnya
        function nextImage() {
          currentIndex = (currentIndex + 1) % imgSources.length;
          changeImage();
        }
        
        // Menambahkan event listener ke tombol geser
        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);
        
        // Menjalankan fungsi untuk mengganti gambar setiap 3 detik
        setInterval(nextImage, 1000);
