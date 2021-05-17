function normalize(items) {
    const min = Math.min(...items)
    const max = Math.max(...items)
    const diff = max - min;
    return items.map(i => (i - min) / diff)
}

/**
 * 
 * @param {{ data, width, height, chartHeight, spacing }} options chart options
 * @returns DrawContext
 */
function drawChart({ data, width, height, chartHeight, spacing }) {
    const items = data.map(i => i[0])
    const nitems = normalize(items)
    console.log(nitems)
    const c = new DrawContext()
    c.size = new Size(width, height)
    const p = new Path()
    p.addLines([
        new Point(0, height),
        new Point(0, height)
    ])
    // p.addQuadCurve(new Point(150, 150), new Point(0, 150))
    // p.addQuadCurve(new Point(300, 300), new Point(300, 150))
    const step = width / (nitems.length - 1)
    const halfStep = step / 2;

    const getPoint = (arr, index) => {
        const i = arr[index]
        const yy = i * chartHeight
        const y = (height - spacing) - yy
        return new Point(index * step, y)
    }

    const getCurvePoint = (arr, index, mp) => {
        const op = getPoint(arr, index + mp);
        const p = getPoint(arr, index)
        if (mp == -1) {
            p.x += halfStep
            return p
        } else if (mp == 1) {
            op.x -= halfStep
            return op
        }
        return p
    }

    p.addLine(new Point(0, height))

    nitems.forEach((i, index, arr) => {
        p.addLine(
            getPoint(arr, index),
            getCurvePoint(arr, index, 1),
            getCurvePoint(arr, index, -1)
        )
    })
    p.addLine(new Point(width, height))
    p.closeSubpath()
    c.addPath(p)
    c.setStrokeColor(Color.red())
    //c.setLineWidth(5)
    // c.strokePath()
    c.setFillColor(Color.purple())
    c.fillPath()
    return c;
}


module.exports.drawChart = drawChart;
