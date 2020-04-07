exports.gerar = (w, h, min = 0, max = 10) => {
    let ret = []
    for (let i = 0; i < h; i++) {
        let ri = []
        for (let j = 0; j < w; j++) {
            let v
            do {
                Math.round
                v = parseInt(Math.random()*(max-min))+min
            } while (ri.includes(v))
            ri.push(v)
        }
        ret.push(ri)
    }
    return ret.map(e => e.sort())
}

exports.compare = (data, current) => {
    let numbers = {}
    data.forEach(d => {
        // Calculates the equivalence between current and d
        let dw = current.filter(e => d.includes(e)).length / current.length
        d.forEach(e => {
            numbers[e] = (numbers[e] || 1) * dw
        })
        // console.log(d.join(" - "), dw, current)
    });
    console.log("Probabilidades: ")
    console.log(numbers)
    let ret = Object.keys(numbers).reduce((t, e) => {
        if (!current.includes(e) && (t[0] == null || numbers[e] > t[1])) {
            return [e, numbers[e]]
        }
        return t
    }, [null, 0])
    return ret[0]
}