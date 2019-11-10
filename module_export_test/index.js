'use strict'

async function test01(event) {
  return {
    message: "test01",
    event: event
  }
}

async function test02(event) {
  return {
    message: "test02",
    event: event
  }
}

module.exports = {
  test01: test01,
  test02: test02
}