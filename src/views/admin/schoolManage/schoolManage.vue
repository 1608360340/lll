<template>
    <div>
        <div class="up">
            <div class="title">学校信息</div>
            <el-button type="primary" plain @click="doAdd()">
                <el-icon size="15px" :color="color">
                    <Plus />
                </el-icon>
                新建</el-button>
        </div>

        <div class="down">
            <div>
                <ListView :data="data" :column="column" title="">
                    <slot>
                        <el-table-column label="状态" width="70">
                            <template #default="scope">
                                <span>{{ scope.row.enable == 0 ? '未启用' : '启用' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button  plain  type="primary" @click="doEdit(scope.row.id)">
                                    <el-icon size="18px" :color="color">
                                        <Edit />
                                    </el-icon>
                                    编辑</el-button>
                                <el-button  plain type="danger" @click="doDelete(scope.row.id)">
                                    <el-icon size="18px" :color="color">
                                        <Delete />
                                    </el-icon>
                                    删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="">
            <SchoolEdit :id="choiceId" @doCancel="doCancel"></SchoolEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '../../../components/list-view/list-view.vue';
import { al, edit, query, del, add, one } from "@/http/school/schoolApi";
import { success, fail } from "@/utils/msg/msg";
import SchoolEdit from '../../../components/schoolEdit/schoolEdit.vue';
import { useUserStore } from "@/store/user";
export default {
    mounted() {
        const userStore = useUserStore();
        const { token } = userStore;
        console.log('token:' + token)
        this.column = this.buildColumn()
        this.all()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0
        };
    },
    methods: {
        doEdit(id) {
            this.choiceId = id
            this.visible = true
            console.log('编辑的id:' + this.choiceId + '  visible:' + this.visible)
        },
        doAdd() {
            console.log('触发了添加方法')
            this.choiceId = 0
            this.visible = true
        },
        doCancel() {
            this.visible = false
            this.all()
        },
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                success('删除成功')
                this.all()
            })
        },
        all() {
            al().then(resp => {
                // console.log('收到回复：' + JSON.stringify(resp.data))
                console.log('婚纱和')
                this.data = resp.data.schools

                this.data.forEach(item=>{
                    item.updateTime = item.updateTime.split('T')[0]
                    item.createTime = item.createTime.split('T')[0]
                })
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "学校编号", width: 100 },
                { prop: "province", label: "省", width: 100 },
                { prop: "city", label: "市", width: 100 },
                { prop: "area", label: "区", width: 100 },
                { prop: "schoolName", label: "学校名称", width: 200 },
                { prop: "latitude", label: "纬度", width: 200 },
                { prop: "longitude", label: "经度", width: 200 },
                { prop: "description", label: "描述", width: 200 },
                { prop: "address", label: "地址", width: 250 },
            ];
        }
    },
    components: { ListView, SchoolEdit }
}
</script>
<style  scoped>
.up {
    display: flex;
    padding: 20px;
    justify-content: center;
}
.title{
    font-size: large;
    font-weight: 600;
    padding-right: 20px;
}
.down {
    display: flex;
    justify-content: center;
    width: 100;
}
</style>
