import Swal from "sweetalert2";

const alerts = (count, product) => {
    count === 1 ?
    Swal.fire({
      position: 'bottom',
      width: '32rem',
      title: `${count} copy of ${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      customClass: {
        title: 'fs-6 m-0'
      }
    })
    :
    Swal.fire({
      position: 'bottom',
      width: '32rem',
      title: `${count} copies of ${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      customClass: {
        title: 'fs-6 m-0'
      }
    })
}

export default alerts