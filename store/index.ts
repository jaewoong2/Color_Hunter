import create from 'zustand';

const countStore = create<{
    number: number,
    increaseNumber: () => void,
    decreaseNumber: () => void
}>(set => ({
    number: 0,
    increaseNumber: () => set(({ number }) => ({ number: number + 1 })),
    decreaseNumber: () => set(({ number }) => ({ number: number - 1 })),
}))

export { countStore };