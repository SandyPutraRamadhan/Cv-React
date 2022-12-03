import React from 'react'
import ams from '../social.2ec36ec3-removebg-preview.png'
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div class="p-5">
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500" style={{clipPath: "polygon(0 9%, 83% 9%, 56% 93%, 0 93%)"}}>
      <div className="flex items-center p-10">
        <img class="rounded-full w-44 bg-black" src={ams} alt="" />
        <h2 class="p-4"> Sandy Putra Ramadhan</h2>
      </div>
    </div>
    <div class="leading-[3] bg-gradient-to-r from-cyan-500 to-blue-500 text-center pl-[30px] mr-[190px]">
      <table>
        <tr>
          <th>Email :</th>
          <td>Sandypt****@gmail.com</td>
        </tr>
        <tr>
          <th>Telepon :</th>
          <td>08387*****</td>
        </tr>
          <th>Sosmed :</th>
          <tr>
          <th><a href="https://www.instagram.com/?hl=id" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram-square">Instagram</i></a></th>
          <th><a href="https://id-id.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i>Facebook</a></th>
          <th><a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i>Twitter</a></th>
          </tr>
          <tr>
          <th>Sekolah : </th>
          <td>SMK Bina Nusantara Semarang</td>
        </tr>
      </table>
    <hr />
    <div className="d-grid gap-2">
      <a href="/cv">
      <Button variant="primary" size="lg" value="/cv">
      <i class="fas fa-id-badge"> Curiculum Vitae</i>   
      </Button>
      </a>
      <hr />
    </div>
    </div>
    </div>
  )
}

export default About