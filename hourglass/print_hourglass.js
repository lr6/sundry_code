function print_star(n) {
    let count = 1
    let s = 1

    for (let i = 1; i < n; i++) {
        s = (2 * i + 1) * 2 + s
        if (n >= s) {
            count = i
        } else {
            break
        }
    }
    const star_all_len = 2 * count + 1

    for (let i = count; i > -1; i--) {
        const star_len = 2 * i + 1
        let star_str = ''
        for (let i = 0; i < star_len; i++) {
            star_str += '*'
        }
        const ff = (star_all_len - star_len) / 2 + star_len
        star_str = star_str.padStart(ff, ' ')
        star_str = star_str.padEnd(star_all_len, ' ')
        console.log(star_str)
    }

    for (let i = 1; i <= count; i++) {
        const star_len = 2 * i + 1
        let star_str = ''
        for (let i = 0; i < star_len; i++) {
            star_str += '*'
        }
        const ff = (star_all_len - star_len) / 2 + star_len
        star_str = star_str.padStart(ff, ' ')
        star_str = star_str.padEnd(star_all_len, ' ')
        console.log(star_str)
    }

}

print_star(31)