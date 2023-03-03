import { AppLayout } from "@/common/layouts";
import { BoardContainer } from "@/features/board";

const boardPage = () => {
    return (
        <AppLayout>
            <BoardContainer />
        </AppLayout>
    )
}
export default boardPage;