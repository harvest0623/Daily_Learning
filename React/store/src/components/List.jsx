import { useEffect } from "react";
import useListStore from "../store/list"

export default function List() {
    const list = useListStore((state) => state.list);
    const fetchList = useListStore((state) => state.fetchList);
    useEffect(() => {
        fetchList()
    }, [])
    console.log(list);
    return (
        <div>
            {
                list.map((item) => {
                    return <div key={item.name}>{item.name}</div>
                })
            }
        </div>
    )
}
