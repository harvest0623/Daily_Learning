let list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: {
                                val: 8,
                                next: {
                                    val: 9,
                                    next: null
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

let node = list
for (let i = 1; i < 8 && node; i++) {
    node = node.next
}
console.log(node);