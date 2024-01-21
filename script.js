
const users = document.getElementById("nama-pejuang")

nama_pemain = prompt("Masukkan nama anda wahai pahlawan..", "Abdul")


users.innerHTML = "Selamat datang "+nama_pemain+"!"

if (nama_pemain == null){
    alert("Karena nama tidak di isi maka namamu sekarang Abdul.")
    users.innerHTML = "Selamat datang Abdul!"
}

let uang = document.getElementById("uang")
let text = document.getElementById("text-1")
let jumlah = document.getElementById("jumlah")

let gold = Number(uang.innerHTML)




function test(){
    let hasil = document.getElementById("hasil")
    let judi = Number(jumlah.value)
    let random = Math.floor(Math.random() * 2)+1;
    if(judi >= 1){
      if(gold >= judi){
        if(random == 1){
            uang.innerHTML = `${gold + judi}`
            gold = gold + judi
            hasil.innerHTML= "Uang anda Bertambah +++"
        }else{
          hasil.innerHTML= "Uang anda Berkurang ---"
            uang.innerHTML = `${gold - judi}`
            gold = gold - judi
            if(uang.innerHTML == 0){
                alert("uangmu sudah habis")
            }
            
        }
      }else{
        alert("masukan angka yang benar zzzzz, atau lu miskin??")
      }
}else{
  hasil.innerHTML= "Masukan angka yang valid"
}
    }
      