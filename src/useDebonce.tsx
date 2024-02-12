export function useDebonce(fn: Function, ms: number) {
    let interval: NodeJS.Timeout
    return function (this: any) {
        const fnCall = () => { fn.apply(this, arguments) }

        clearInterval(interval)
        interval = setTimeout(fnCall, ms)
    }
}
