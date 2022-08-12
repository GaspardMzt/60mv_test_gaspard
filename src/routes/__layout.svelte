<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Million Victories</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
            <li><a href="/hello">Hello</a></li>
            <li><a href="/settings">Settings</a></li>
            <li tabindex="0">
                <a>
                    Types demo
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2 bg-base-100">
                    <li><a href="/settings/datetime">DateTime</a></li>
                    <li><a href="/settings/time">Time</a></li>
                    <li><a href="/settings/boolean">Boolean</a></li>
                    <li><a href="/settings/integer">Integer</a></li>
                    <li><a href="/settings/decimal">Decimal</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<slot />
