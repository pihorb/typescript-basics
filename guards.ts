function string(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error result'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    }
  } else {
    return {
      info: res.header + res.message,
    }
  }
}

type alertType = 'success' | 'danger' | 'warning'

function setAlertType(type: alertType) {

}

setAlertType('success')
setAlertType('danger')
setAlertType('warning')
// woudn't work
setAlertType('deafult')



