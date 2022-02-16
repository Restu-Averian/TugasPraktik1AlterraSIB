# Resume Materi Git
Versioning merupakan mengatur versi dari program <br />
Git merupakan salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-bersama <br />

## Command Git
Beberapa command git yang sering digunakan, yaitu : 
  1. git config <br />
       Mengatur konfigurasi, seperti email, username, dsb.
  2. git init <br />
        Mengatur sebuah folder sebagai repositori git kita
  4. git clone <br />
      Untuk mengclone atau mendownload repository dari server
  6. git status <br />
  Untuk melihat status repo, misal seperti apakah ada file yang berada dalam working area
  8. git add <br />
 Untuk menambahkan file dari working area ke staging area 
  10. git commit <br />
 Untuk memasukkan ke repository local yang dibarengi dengan pesan commit
  12. git push <br />
 Untuk memasukkan dari repository local ke repository server
  14. git branch  <br />
 Bisa untuk menambahkan, melihat, dan menghapus branch yang tersedia
  16. git checkout <br />
 Untuk pindah branch dan bisa juga untuk buat branch dan langsung pindah ke branch yang baru dibuat
  18. git merge <br />
 Untuk menggabungkan branch ke branch yang aktif
  20. git diff <br />
Untuk melihat perbedaan antara kode sebelum ditambahkan dengan yang telah ditambahkan
  22. git stash <br />
Untuk menyimpan perubahan tanpa langsung commit, namun hanya sementara
## Area dalam Git
Terdapat 3 area dalam git, yaitu : 
1. Working Area <br />
Area di saat kita bekerja. Untuk memindahkannya ke Staging area, bisa melakukan command 
`git add .` -> untuk menambahkan semua file dari Working area ke staging area.
3. Staging Area
Area di mana sebelum memasuki repository. File yang berada pada area ini masih dapat dikembalikan ke Working Area Untuk menambahkannya ke Repository, dapat mengetikkan perintah
`git commit -m "pesanCommit"`
5. Repository
File yang berada pada area ini, masih berada pada repository local. Untuk memasukkannya ke repository global yang terdapat pada github, dapat mengetikkan perintah
`git push -u origin namaBranch`
## Tugas Praktik 1
Tugas Praktik 1 SIB Alterra <br />
Aku bikin web alta.id lite 🗿 <br />
url : https://restu-averian.github.io/TugasPraktik1AlterraSIB/
