import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProblemCard } from '@/components/ProblemCard';
import { toast } from '@/hooks/use-toast';
import { Download, BookOpen } from 'lucide-react';
import { generatePDFWithWatermark } from '@/utils/pdfGenerator';

interface Problem {
  id: string;
  question: string;
  answer: string;
  solution: string;
}

const Index = () => {
  const [gradeLevel, setGradeLevel] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [localContext, setLocalContext] = useState<string>('');
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const mockProblems: Problem[] = [
    {
      id: '1',
      question: 'Di pasar tradisional Kebayoran, Pak Ahmad menjual rambutan. Pada hari Senin, ia menjual 45 kg rambutan. Pada hari Selasa, ia menjual 38 kg rambutan. Jika harga rambutan Rp 15.000 per kg, berapa total uang yang diperoleh Pak Ahmad dalam dua hari?',
      answer: 'Rp 1.245.000',
      solution: 'Langkah 1: Hitung total rambutan yang terjual = 45 kg + 38 kg = 83 kg\nLangkah 2: Hitung total pendapatan = 83 kg × Rp 15.000 = Rp 1.245.000'
    },
    {
      id: '2',
      question: 'Bu Sari memiliki kebun singkong seluas 24 m². Ia ingin membagi kebunnya menjadi 6 bagian sama besar untuk ditanami varietas singkong yang berbeda. Berapa luas setiap bagian kebun?',
      answer: '4 m²',
      solution: 'Langkah 1: Bagi luas total dengan jumlah bagian\nLangkah 2: 24 m² ÷ 6 = 4 m²\nJadi setiap bagian kebun memiliki luas 4 m²'
    },
    {
      id: '3',
      question: 'Sekolah dasar di desa Sukamaju mengadakan lomba mewarnai. Ada 7 kelas yang berpartisipasi, masing-masing kelas mengirimkan 12 siswa. Jika setiap siswa membutuhkan 3 pensil warna, berapa total pensil warna yang dibutuhkan?',
      answer: '252 pensil warna',
      solution: 'Langkah 1: Hitung total siswa = 7 kelas × 12 siswa = 84 siswa\nLangkah 2: Hitung total pensil warna = 84 siswa × 3 pensil = 252 pensil warna'
    },
    {
      id: '4',
      question: 'Pak Budi adalah pedagang ikan di pelabuhan Muara Angke. Ia membeli 150 kg ikan tongkol dengan harga Rp 25.000 per kg. Jika ia menjual ikan tersebut dengan harga Rp 32.000 per kg, berapa keuntungan yang diperoleh Pak Budi?',
      answer: 'Rp 1.050.000',
      solution: 'Langkah 1: Hitung harga beli = 150 kg × Rp 25.000 = Rp 3.750.000\nLangkah 2: Hitung harga jual = 150 kg × Rp 32.000 = Rp 4.800.000\nLangkah 3: Hitung keuntungan = Rp 4.800.000 - Rp 3.750.000 = Rp 1.050.000'
    },
    {
      id: '5',
      question: 'Di sawah Desa Cikarang, petani menanam padi dalam 15 petak. Setiap petak menghasilkan 25 karung padi. Jika setiap karung beratnya 50 kg, berapa total berat padi yang dihasilkan?',
      answer: '18.750 kg',
      solution: 'Langkah 1: Hitung total karung = 15 petak × 25 karung = 375 karung\nLangkah 2: Hitung total berat = 375 karung × 50 kg = 18.750 kg'
    }
  ];

  const handleGenerate = async () => {
    if (!gradeLevel || !topic || !localContext) {
      toast({
        title: "Input Tidak Lengkap",
        description: "Mohon isi semua field untuk menghasilkan soal yang tepat.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setProblems(mockProblems);
      setIsGenerating(false);
      toast({
        title: "Soal Berhasil Dibuat!",
        description: "Lima soal cerita matematika telah dibuat sesuai konteks lokal Anda.",
      });
    }, 2000);
  };

  const handleRegenerateProblem = (problemId: string) => {
    const newProblem: Problem = {
      id: problemId,
      question: `Di warung ${localContext}, Bu Ani menjual jajanan tradisional. Ia memiliki 72 klepon dan ingin mengemas dalam plastik berisi 8 klepon setiap bungkus. Berapa banyak bungkus klepon yang dapat dibuat Bu Ani?`,
      answer: '9 bungkus',
      solution: 'Langkah 1: Bagi total klepon dengan jumlah per bungkus\nLangkah 2: 72 ÷ 8 = 9 bungkus'
    };

    setProblems(prev => prev.map(p => p.id === problemId ? newProblem : p));
    toast({
      title: "Soal Diperbaharui",
      description: "Soal baru telah dibuat dengan konteks yang sama.",
    });
  };

  const handleDownloadPDF = () => {
    if (problems.length === 0) {
      toast({
        title: "Tidak Ada Soal",
        description: "Silakan buat soal terlebih dahulu sebelum mengunduh PDF.",
        variant: "destructive"
      });
      return;
    }

    try {
      generatePDFWithWatermark(problems, `Kelas ${gradeLevel}`, topic, localContext);
      toast({
        title: "PDF Berhasil Diunduh",
        description: "Lembar kerja dan kunci jawaban telah disimpan dengan watermark lokaDidik.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat membuat PDF. Silakan coba lagi.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">LokaDidik</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pembuat Soal Matematika dengan Konteks Lokal untuk Guru Indonesia
          </p>
        </div>

        {/* Generator Form */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Buat Soal Matematika</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="grade">Tingkat Kelas</Label>
                <Select value={gradeLevel} onValueChange={setGradeLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kelas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Kelas 1</SelectItem>
                    <SelectItem value="2">Kelas 2</SelectItem>
                    <SelectItem value="3">Kelas 3</SelectItem>
                    <SelectItem value="4">Kelas 4</SelectItem>
                    <SelectItem value="5">Kelas 5</SelectItem>
                    <SelectItem value="6">Kelas 6</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="topic">Topik Matematika</Label>
                <Input
                  id="topic"
                  placeholder="contoh: Penjumlahan, Perkalian, Pecahan"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="context">Konteks Lokal</Label>
              <Textarea
                id="context"
                placeholder="Deskripsikan lingkungan sekitar siswa: nama desa/kota, mata pencaharian warga, makanan khas, dll."
                value={localContext}
                onChange={(e) => setLocalContext(e.target.value)}
                rows={3}
              />
            </div>
            
            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
              size="lg"
            >
              {isGenerating ? "Sedang Membuat Soal..." : "Buat Soal Matematika"}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Problems */}
        {problems.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Soal yang Dibuat</h2>
              <Button 
                onClick={handleDownloadPDF}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Unduh PDF Lengkap
              </Button>
            </div>
            
            <div className="grid gap-4">
              {problems.map((problem, index) => (
                <ProblemCard
                  key={problem.id}
                  problem={problem}
                  index={index + 1}
                  onRegenerate={() => handleRegenerateProblem(problem.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
