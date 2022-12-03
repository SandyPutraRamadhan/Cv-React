import React from 'react'
import log from '../images-removebg-preview.png'
import Button from 'react-bootstrap/Button';

function Cv() {
  return (
    <div class="box-border p-4 leading-[2] w-50">
      <div class="flex items-center border-4 bg-gradient-to-r from-cyan-500 to-blue-600">
    <img src={log} alt="" />
    <h2><span class="text-white">Curiculum </span><span class="text-red-600 italic">Vitae</span></h2>
    <hr />
    </div>
    <div class="border-3 text-[20px] bg-gradient-to-r from-cyan-500 to-blue-500 to- italic">
    <table>
      <div class="border rounded-b-lg w-100">
      <i class="fas fa-id-badge"> Profil</i>
      </div>
        <tr>
            <th>Nama</th>
            <th>:</th>
            <td>Sandy Putra Ramadhan</td>
        </tr>
        <tr>
        <th>TTL</th>
        <th>:</th>
        <td>Tegal, 28 September 2006</td>
        </tr>
        <tr>
        <th>Pendidikan</th>
        <th>:</th>
        <td>Sekolah Menengah Keatas</td>
        </tr>
        <tr>
        <th>Agama </th>
        <th>:</th>
        <td>Islam</td>
        </tr>
        <tr>
        <th>Jenis Kelamin </th>
        <th>:</th>
        <td>Laki-laki</td>
        </tr>
        <tr>
        <th>Alamat </th>
        <th>:</th>
        <td>Jl.Kemantren raya Semarang</td>
        </tr>
        <tr>
        <th>Status </th>
        <th>:</th>
        <td>Pelajar</td>
        </tr>
        <tr>
        <th>Usia </th>
        <th>:</th>
        <td>16</td>
        </tr>
    </table>
    <hr />
    <div className="d-grid gap-2">
      <a href="/">
      <Button variant="primary" size="lg" value="/">
      <i class="fas fa-id-badge"> About Me</i>   
      </Button>
      </a>
      <hr />
    </div>
    </div>
    </div>
  )
}

export default Cv