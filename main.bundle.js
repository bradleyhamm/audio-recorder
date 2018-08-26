webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.record {\n  position: fixed;\n  right: 35px;\n  bottom: 35px;\n}\n.no-recordings-message {\n  font-style: italic;\n  color: #777;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <mat-card-title>Recordings</mat-card-title>\n    <mat-list *ngIf=\"recordings.length\">\n      <mat-list-item *ngFor=\"let recording of recordings\">\n        {{ recording.title }}\n        <a [href]=\"recording.downloadURL\" target=\"_blank\" mat-icon-button\n          [download]=\"recording.filename\">\n          <mat-icon matListIcon>file_download</mat-icon>\n        </a>\n        <button (click)=\"previewStart(recording)\" mat-icon-button\n          *ngIf=\"!recording.isPlaying\">\n          <mat-icon matListIcon>play_arrow</mat-icon>\n        </button>\n        <button (click)=\"previewStop()\" mat-icon-button\n          *ngIf=\"recording.isPlaying\">\n          <mat-icon matListIcon>stop</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n    <p *ngIf=\"!recordings.length\" class=\"no-recordings-message\">No recordings</p>\n  </mat-card-content>\n</mat-card>\n\n<button mat-fab class=\"record\" *ngIf=\"!isRecording\" (click)=\"startRecording()\">\n  <mat-icon>mic</mat-icon>\n</button>\n<button mat-fab class=\"record\" *ngIf=\"isRecording\" (click)=\"stopRecording()\">\n  <mat-icon>stop</mat-icon>\n</button>\n\n<audio></audio>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recorder_service__ = __webpack_require__("../../../../../src/app/recorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_service__ = __webpack_require__("../../../../../src/app/preview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(recorderService, previewService, _ngZone, sanitizer) {
        this.recorderService = recorderService;
        this.previewService = previewService;
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.title = 'app';
        this.isRecording = false;
        this.recordings = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRecordings();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from recording observable
    };
    AppComponent.prototype.startRecording = function () {
        this.isRecording = true;
        this.recorderService.start();
    };
    AppComponent.prototype.stopRecording = function () {
        this.isRecording = false;
        this.recorderService.stop();
    };
    AppComponent.prototype.getRecordings = function () {
        var _this = this;
        var count = 1;
        this.recorderService.getRecordings().subscribe(function (url) {
            _this._ngZone.run(function () {
                var recording = {
                    url: url,
                    title: 'Audio #' + count,
                    filename: 'audio-' + count + '-' + new Date().toJSON().replace(/\..+$/, ''),
                    downloadURL: _this.sanitizer.bypassSecurityTrustResourceUrl(url),
                    isPlaying: false
                };
                _this.recordings.push(recording);
                count++;
            });
        });
    };
    AppComponent.prototype.previewStart = function (recording) {
        this.previewStop();
        recording.isPlaying = true;
        this.previewService.play(recording.url, function () {
            recording.isPlaying = false;
        });
    };
    AppComponent.prototype.previewStop = function () {
        var _this = this;
        this.recordings.forEach(function (recording) {
            if (recording.isPlaying) {
                recording.isPlaying = false;
                _this.previewService.stop();
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recorder_service__["a" /* RecorderService */],
            __WEBPACK_IMPORTED_MODULE_2__preview_service__["a" /* PreviewService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recorder_service__ = __webpack_require__("../../../../../src/app/recorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview_service__ = __webpack_require__("../../../../../src/app/preview.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__recorder_service__["a" /* RecorderService */], __WEBPACK_IMPORTED_MODULE_8__preview_service__["a" /* PreviewService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/preview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewService = (function () {
    function PreviewService() {
    }
    PreviewService.prototype.getPlayer = function () {
        return document.querySelector('audio');
    };
    PreviewService.prototype.play = function (url, onend) {
        var _this = this;
        var player = this.getPlayer();
        player.src = url;
        player.addEventListener('loadedmetadata', function (e) {
            player.play();
        });
        player.addEventListener('ended', function (e) {
            _this.stop();
            player.currentTime = 0;
            onend();
        });
    };
    PreviewService.prototype.stop = function () {
        this.getPlayer().pause();
    };
    PreviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PreviewService);
    return PreviewService;
}());



/***/ }),

/***/ "../../../../../src/app/recorder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecorderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecorderService = (function () {
    function RecorderService() {
    }
    RecorderService.prototype.ngOnInit = function () {
        if (!this.isSupported()) {
            window.alert('Audio recording is not supported');
        }
    };
    RecorderService.prototype.start = function () {
        var _this = this;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            var chunks = [];
            _this.audioTrack = stream.getAudioTracks()[0];
            _this.recorder = new MediaRecorder(stream, {});
            _this.recorder.ondataavailable = function (e) {
                chunks.push(e.data);
                if (_this.recorder.state === 'inactive') {
                    _this.addRecording(new Blob(chunks, { type: 'audio/webm' }));
                }
            };
            _this.recorder.start(1000);
        });
    };
    RecorderService.prototype.stop = function () {
        this.recorder.stop();
        this.audioTrack.stop();
    };
    RecorderService.prototype.isSupported = function () {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    };
    RecorderService.prototype.getRecordings = function () {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        return this.subject;
    };
    RecorderService.prototype.addRecording = function (blob) {
        var url = URL.createObjectURL(blob);
        this.subject.next(url);
    };
    RecorderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RecorderService);
    return RecorderService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map