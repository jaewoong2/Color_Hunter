export const getRgb = (hex: string) => {
    let rgb = 'rgb(';
    for (let i = 0; i < 6; i = i + 2) {
        rgb += parseInt(hex.slice(1 + i, 3 + i), 16)
        if (i < 4) {
            rgb += ','
        }
    }
    rgb += ')'
    return rgb
}

export const copyClipBoard = (copy: string) => {
    navigator.clipboard.writeText(copy).then(() => {
        window.alert('Success!');
    });
}