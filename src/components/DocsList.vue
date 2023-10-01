<template>
    <div class="container">
        <div class="row g-4">
            <div class="col-md-4" v-for="item in documentList" :key="item.id">
                <b-card :title="item.name">
                    <b-card-text>
                        <b-icon-file-earmark-pdf></b-icon-file-earmark-pdf>
                        <span>test.pdf</span>
                    </b-card-text>
                    <div class="d-flex gap-2 small text-muted">
                        <span>1 May</span>
                        <span>20 KB</span>
                        <span>2 Members</span>
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