<!-- 
    # オリジナルデザイン - フッター
    
    ---
-->

<template>
    <footer class="footer-body">
        <NuxtLink class="footer-title" to="/">qpON→GO!</NuxtLink>
        <div class="footer-link-group">
            <NuxtLink class="footer-link" to="/inquiry">
                お問い合わせ
            </NuxtLink>
            <NuxtLink class="footer-link" to="/terms">
                利用規約
            </NuxtLink>
            <NuxtLink class="footer-link" to="/privacy">
                プライバシーポリシー
            </NuxtLink>
        </div>

    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer-body {
    width: 100%;
    background-color: #34495E;
    color: white;
    display: flex;
    padding: 20px;
}

.footer-title {
    font-size: 36px;
    color: white;
    text-decoration: none;
} .footer-title:active {
    color: #e5e5e5;
}

.footer-link-group {
    margin-left: auto;
}

.footer-link {
    margin: 15px;
    color: white;
    text-decoration: none;
    display: block;
} .footer-link:hover {
    text-decoration: underline;
} .footer-link:active {
    color: #e5e5e5;
}

@media screen and (max-width: 550px){
    .footer-title {
        font-size: 6vw;
    }

    .footer-link {
        font-size: 3vw;
    }    
}

</style>