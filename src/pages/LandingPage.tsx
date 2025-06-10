
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, MapPin, Download, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">LokaDidik</h1>
          </div>
          <Link to="/app">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Mulai Membuat Soal
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-800 leading-tight">
              Soal Matematika dengan
              <span className="text-blue-600 block">Konteks Lokal Indonesia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform AI yang membantu guru Indonesia membuat soal matematika yang relevan 
              dengan lingkungan sekitar siswa. Dari sawah di Jawa hingga pelabuhan di Sumatra.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/app">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Coba Gratis Sekarang
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="font-semibold px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Lihat Contoh Soal
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Mengapa Memilih LokaDidik?
            </h3>
            <p className="text-gray-600 text-lg">
              Solusi lengkap untuk pendidikan matematika yang kontekstual
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Konteks Lokal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Soal yang disesuaikan dengan lingkungan sekitar siswa - dari pasar tradisional, 
                  sawah, hingga pelabuhan di seluruh Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Sesuai Kurikulum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Soal dirancang sesuai dengan tingkat kelas dan topik matematika 
                  yang ada dalam kurikulum Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Siap Pakai</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Unduh lembar kerja dan kunci jawaban dalam format PDF 
                  yang siap untuk dicetak dan digunakan di kelas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Cara Kerja LokaDidik
            </h3>
            <p className="text-gray-600 text-lg">
              Hanya dalam 3 langkah mudah
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Masukkan Konteks</h4>
              <p className="text-gray-600">
                Ceritakan tentang lingkungan sekitar siswa Anda - desa, kota, 
                mata pencaharian, atau makanan khas daerah.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Pilih Topik</h4>
              <p className="text-gray-600">
                Tentukan kelas dan topik matematika yang ingin Anda ajarkan, 
                dari penjumlahan hingga pecahan.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Unduh & Gunakan</h4>
              <p className="text-gray-600">
                Dapatkan soal-soal berkualitas beserta kunci jawaban 
                yang siap digunakan di kelas Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h3 className="text-4xl font-bold">
            Siap Membuat Pembelajaran Matematika Lebih Menarik?
          </h3>
          <p className="text-xl opacity-90">
            Bergabunglah dengan ribuan guru Indonesia yang sudah merasakan manfaat LokaDidik
          </p>
          <Link to="/app">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Mulai Sekarang - Gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                <h4 className="text-xl font-semibold">LokaDidik</h4>
              </div>
              <p className="text-gray-300">
                Platform AI untuk menciptakan soal matematika dengan konteks lokal Indonesia.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Produk</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/app" className="hover:text-white">Generator Soal</Link></li>
                <li><a href="#" className="hover:text-white">Contoh Soal</a></li>
                <li><a href="#" className="hover:text-white">Panduan Guru</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-semibold">Tentang</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Tim Kami</a></li>
                <li><a href="#" className="hover:text-white">Kontak</a></li>
                <li><a href="#" className="hover:text-white">Bantuan</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LokaDidik. Dibuat dengan ❤️ untuk pendidikan Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
