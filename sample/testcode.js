function callbackCaller(cb) {
    cb && cb();
}

/* 2 callbacks */
callbackCaller(function x() {
    callbackCaller(function y() {
        callbackCaller();
    });
});

/* 4 callbacks */
callbackCaller(() => {
    callbackCaller(() => {
        callbackCaller(() => {
            callbackCaller(() => {
                callbackCaller();
            });
        });
    });
});

/* 5 callbacks */
callbackCaller(() => {
    callbackCaller(() => {
        callbackCaller(() => {
            callbackCaller(() => {
                callbackCaller(() => {
                    callbackCaller();
                });
            });
        });
    });
});

/* 6 callbacks */
callbackCaller(() => {
    callbackCaller(() => {
        callbackCaller(() => {
            callbackCaller(() => {
                callbackCaller(() => {
                    callbackCaller(() => {
                        callbackCaller();
                    });
                });
            });
        });
    });
});

/* Functions in body (not callbacks) */
callbackCaller(() => {
    function a() {
        function b() {
            function c() {
                function d() {
                    callbackCaller();
                }
                d();
            }
            c();
        }
        b();
    }
    a();
})

function veryLongFunction() {
    let x = 0;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
    x = 1;
    x = 2;
}