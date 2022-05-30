
// eje 1
const edad = parseInt(prompt('cuál es tu edad'))
const edad_dias = edad * 365
console.log('tiene \n ' + `` + edad_dias + ' dias')

// eje 2
const edad_max = 83 // media
const snack = prompt('cuál es tu snack favorito')
const valor_snack = prompt('cuál es el valor de tu snack favorito')
const semanas = 56
const snack_dia = 3
const total_snack = (snack_dia * semanas) * edad_max
const snack_faltan = total_snack - ((snack_dia * semanas) * edad)

alert('Necesitarás ' + snack_faltan + ' snacks para que te alcancen hasta los ' + edad_max + ' años.')

alert('vas a gastar ' + valor_snack * snack_faltan + ' en snacks el resto de tu vida. ')

