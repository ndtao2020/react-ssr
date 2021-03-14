import Swal from "sweetalert2"

function SwalConfig() {
  return Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer)
      toast.addEventListener("mouseleave", Swal.resumeTimer)
    },
  })
}

export function CHECK_SUCCESS(mes, titles = "Thông báo") {
  return SwalConfig().fire({ icon: "success", title: titles, text: mes })
}

export function CHECK_WARNING(mes, titles = "Cảnh báo") {
  return SwalConfig().fire({ icon: "warning", title: titles, text: mes })
}

export function CHECK_ERROR(mes, titles = "Lỗi") {
  return SwalConfig().fire({ icon: "error", title: titles, text: mes })
}

export function CHECK_CONFIRM(mes, titles, icon = "info") {
  return Swal.fire({
    title: titles,
    text: mes,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: "Chấp nhận",
    cancelButtonText: "Không",
  })
    .then((result) => result.value && Promise.resolve(result))
    .catch((err) => Promise.reject(err))
}

export function CHECK_CONFIRM_INPUT(
  mes,
  titles,
  icon = "info",
  placeholder = "Vui lòng nhập thông tin",
  isValidator
) {
  return Swal.fire({
    title: titles,
    text: mes,
    icon: icon,
    input: "textarea",
    inputPlaceholder: placeholder,
    inputAttributes: { "aria-label": placeholder },
    inputValidator: (value) => {
      if (isValidator) {
        if (!value) {
          return "Vui lòng nhập đầy đủ thông tin"
        }
      }
    },
    showCancelButton: true,
    confirmButtonText: "Chấp nhận",
    cancelButtonText: "Không",
  })
    .then((result) => result.value && Promise.resolve(result.value))
    .catch((err) => Promise.reject(err))
}
