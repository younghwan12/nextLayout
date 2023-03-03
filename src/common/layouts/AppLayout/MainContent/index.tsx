import { useState } from "react"
import { useRouter } from "next/router"

import { Button, Space } from "@/common/components"


const MainConent = () => {

    const router = useRouter()

    return (
        <>
            <h2>임시제목</h2>
            <Space>
                <Button
                    onClick={() => {
                        router.push({
                            pathname: `/board`
                        })
                    }}
                >
                    Board
                </Button>
                <Button
                    onClick={() => {
                        router.push({
                            pathname: `/treecase`
                        })
                    }}>
                    Tree
                </Button>
                <Button
                    onClick={() => {
                        router.push({
                            pathname: `/treecase2`
                        })
                    }}>
                    Tree2
                </Button>
            </Space>
        </>
    )
}
export default MainConent