let d = String(new Date) 

d = d.replace(/[^ ]+ /, '')

d = d.replace(/[$ ]+ /, '')

console.log(d);