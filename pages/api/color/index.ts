import { getRgb } from './../../../utils/index';
import type { NextApiRequest, NextApiResponse } from 'next'

export type ColorData = {
    hex: string
    rgb: string
    r: string
    g: string
    b: string
}

export default function handler(
    _: NextApiRequest,
    res: NextApiResponse<ColorData>
) {
    const r = Math.floor((Math.random() * 127) + 127).toString(16)
    const g = Math.floor((Math.random() * 127) + 127).toString(16)
    const b = Math.floor((Math.random() * 127) + 127).toString(16)

    res.status(200).json({ hex: `#${r + g + b}`, rgb: getRgb(`#${r + g + b}`), r, g, b })
}
