import { getRgb, getColors } from './../../../utils/index';
import { NextApiRequest, NextApiResponse } from 'next';
// api/person/:id

export type ColorsData = {
    colors: string[]
}

const getRandomHex = (color: number, weight: number) => {
    const hex = ((color + Math.ceil((Math.random() * weight))) % 255).toString(16);

    if (hex.length === 1) {
        return `0${hex}`
    }
    return hex
}


export default (req: NextApiRequest, res: NextApiResponse<ColorsData | Error>): void => {
    const { query: { hex } } = req;
    const { r, g, b } = getColors(hex as string);
    const colors = new Array(4).fill('').map(() => {
        const color: string = '#' + getRandomHex(r, 45) + getRandomHex(g, 45) + getRandomHex(b, 45)
        return color
    })

    res.status(200).json({ colors });
}