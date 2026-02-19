package main

import "github.com/wailsapp/wails/v2/pkg/runtime"

func setupListeners(app *App) {
	runtime.EventsOn(app.ctx, "test", func(optionalData ...any) {
		println("test event received with data:", optionalData)
	})

}
