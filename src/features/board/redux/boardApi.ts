import qs from 'query-string'
import appApi from '@/redux/appApi'
import { IIQPRes, IPageRes } from '@/common/types'
import { ISearchReqList, ISearchResList } from '../types'

const appTaggedApi = appApi.enhanceEndpoints({
    addTagTypes: ["Board"]
})

const boardApi = appTaggedApi.injectEndpoints({
    endpoints: (builder) => ({
        getboardList: builder.query<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (args) => ({
                url: `/getList?${qs.stringify(args)}`,
                method: "GET",
            }),
            providesTags: () => [{ type: "Board" }],
        }),

        addboardList: builder.mutation<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (body) => ({
                url: `/insertList`,
                method: "POST",
                body,
            }),
            invalidatesTags: () => [{ type: "Board" }],
        }),
        //삭제
        delboardList: builder.mutation<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (id) => ({
                url: `/deleteList/${id}`,
                method: "GET",
                // credentials: 'include',
            }),
            invalidatesTags: () => [{ type: "Board" }],
        }),
        //수정
        updateboardList: builder.mutation<
            IIQPRes<IPageRes<ISearchResList[]>>,
            ISearchReqList
        >({
            query: (body) => ({
                url: `/updateList`,
                method: "POST",
                body,
            }),
            invalidatesTags: () => [{ type: "Board" }],
        })
    })
});

export default boardApi;
export const { useLazyGetboardListQuery, useAddboardListMutation, useDelboardListMutation, useUpdateboardListMutation } = boardApi;