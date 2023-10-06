<template>
    <div class="container">
        <div class="row g-4">
            <div class="col-md-4" v-for="item in documentList" :key="item.id">
                <b-card :title="item.name" @click="cardListOnClick(item.docs)">
                    <b-card-text>
                        <b-icon-file-earmark-pdf></b-icon-file-earmark-pdf>
                        <span>{{ item.name + ".pdf" }}</span>
                    </b-card-text>
                    <div class="d-flex gap-2 small text-muted">
                        <span>{{ "上传时间：" + item.date }}</span>
                    </div>
                    <div class="d-flex gap-2 small text-muted">
                        <span>{{ "文件大小：" + item.size + "m" }}</span>
                    </div>
                </b-card>
            </div> 
        </div>
    </div>
</template>
<script>
    import { BIconFileEarmarkPdf } from 'bootstrap-vue';
    export default{
        components:{
            BIconFileEarmarkPdf
        },
        props:{
            documentList:[]
        },
        methods:{
            cardListOnClick(pdfUrl){
                window.open(pdfUrl, "_blank");
            }
        }
    }
</script>
<style scoped>
</style>