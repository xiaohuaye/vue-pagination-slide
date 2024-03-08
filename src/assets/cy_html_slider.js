class cy_slider {
    constructor(ele, options = undefined) {
        var that = this
        this.options = options
        //slider 盒子，顶层元素
        this.slider_box = document.querySelector(ele)
        if (this.slider_box == null) {
            return
        }
        //slider 手柄
        this.handler = this.slider_box.querySelector('.handler')
        //slider 有值块
        this.light = this.slider_box.querySelector('.light')
        //是否是垂直
        if (this.slider_box.classList.contains("vertical")) {
            this.is_vertical = true
        }
        //是否是禁用
        if (this.slider_box.attributes.getNamedItem("disabled") && this.slider_box.attributes.getNamedItem("disabled").value.toLowerCase() != "false") {
            this.is_disabled = true
        }

        this.is_initialize = true
        this.max_data = 100
        this.min_data = 0
        this.step_separates = []
        this.step_percents = []

        if (options) {
            //参数校验，必要内置参数预算
            var u_max_data = parseFloat(options.max_data)
            if (u_max_data || u_max_data == 0) {
                this.max_data = u_max_data
            }
            var u_min_data = parseFloat(options.min_data)
            if (u_min_data || u_min_data == 0) {
                if (u_min_data < this.max_data) {
                    this.min_data = u_min_data
                } else {
                    this.min_data = this.max_data
                }
            }
            //步长分割
            var data_area = this.max_data - this.min_data
            var u_step = Math.abs(parseFloat(options.step))
            if (u_step) {
                if (data_area / u_step > 200) {
                    u_step = data_area / 200
                }
            } else {
                u_step = Math.floor(data_area / 100)
            }
            var added_step = this.min_data
            this.step_separates.push(added_step)
            while (added_step < this.max_data) {
                added_step += parseFloat(u_step)
                added_step = parseFloat(added_step.toFixed(3))
                if (added_step > this.max_data) {
                    added_step = this.max_data
                }
                this.step_separates.push(added_step)
            }
            for (var i = 0; i < this.step_separates.length; i++) {
                if (this.step_separates.length == 1) {
                    this.step_percents.push(1)
                    break
                }
                var step_percent = i / (this.step_separates.length - 1)
                this.step_percents.push(step_percent)
            }
        }
        this.slider_box.addEventListener('click', (ev) => {
            //点击设置值
            if (that.is_disabled) {
                return
            }
            if (ev.target.nodeName != "SPAN") {
                if (that.is_vertical) {
                    if (ev.target.classList.contains("light")) {
                        that._setPosition(that.slider_box.offsetHeight - (that.slider_box.offsetHeight - that.light.offsetHeight + ev.offsetY))
                    }
                    else {
                        that._setPosition(that.slider_box.offsetHeight - ev.offsetY)
                    }
                } else {
                    that._setPosition(ev.offsetX)
                }
            }
        })
        this.movementX = 0
        this.movementY = 0
        this.previousTouch = null
        this.crt_val = 0
        this.slider_box.addEventListener('mousedown', (ev) => {
            //标准端拖动开始
            if (that.is_disabled) {
                return
            }
            that.movementX = 0
            that.movementY = 0
            that.previousTouch = null
            if (that.is_vertical) {
                that.crt_val = that.slider_box.offsetHeight * (that.handler.style.bottom.replace("%", "") / 100)
            } else {
                that.crt_val = that.slider_box.offsetWidth * (that.handler.style.left.replace("%", "") / 100)
            }
            document.documentElement.addEventListener('mousemove', _dragMove)
            document.documentElement.addEventListener('mouseup', () => {
                document.documentElement.removeEventListener('mousemove', _dragMove)
            })
        })
        this.slider_box.addEventListener('touchstart', (ev) => {
            //touch端拖动开始
            if (that.is_disabled) {
                return
            }
            that.movementX = 0
            that.movementY = 0
            that.previousTouch = null
            if (that.is_vertical) {
                that.crt_val = that.slider_box.offsetHeight * (that.handler.style.bottom.replace("%", "") / 100)
            } else {
                that.crt_val = that.slider_box.offsetWidth * (that.handler.style.left.replace("%", "") / 100)
            }
            document.documentElement.addEventListener('touchmove', _dragMove)
            document.documentElement.addEventListener('touchend', () => {
                document.documentElement.removeEventListener('touchmove', _dragMove)
            })
        })
        function _dragMove(ev) {
            if (ev.type == "touchmove") {
                //touch端
                if (that.previousTouch) {
                    that.movementX += ev.touches[0].pageX - that.previousTouch.pageX;
                    that.movementY += ev.touches[0].pageY - that.previousTouch.pageY;
                };
                that.previousTouch = ev.touches[0];
                if (that.is_vertical) {
                    var new_val = that.crt_val - that.movementY
                    if (new_val < 0) {
                        new_val = 0
                    } else if (new_val > that.slider_box.offsetHeight) {
                        new_val = that.slider_box.offsetHeight
                    }
                    that._setPosition(new_val)
                } else {
                    var new_val = that.crt_val + that.movementX
                    if (new_val < 0) {
                        new_val = 0
                    } else if (new_val > that.slider_box.offsetWidth) {
                        new_val = that.slider_box.offsetWidth
                    }
                    that._setPosition(new_val)
                }
            } else {
                //标准端
                that.movementX += ev.movementX
                that.movementY += ev.movementY
                if (that.is_vertical) {
                    var new_val = that.crt_val - that.movementY
                    if (new_val < 0) {
                        new_val = 0
                    } else if (new_val > that.slider_box.offsetHeight) {
                        new_val = that.slider_box.offsetHeight
                    }
                    that._setPosition(new_val)
                } else {
                    var new_val = that.crt_val + that.movementX
                    if (new_val < 0) {
                        new_val = 0
                    } else if (new_val > that.slider_box.offsetWidth) {
                        new_val = that.slider_box.offsetWidth
                    }
                    that._setPosition(new_val)
                }
            }
            ev.preventDefault()
        }
        //根据相关值设置 slider 样式
        this._setPosition = function (val) {
            var percent
            if (this.is_vertical) {
                percent = parseFloat(val) / this.slider_box.offsetHeight
            } else {
                percent = parseFloat(val) / this.slider_box.offsetWidth
            }
            var resultData
            var closest_index = Math.floor(this.step_separates.length * percent)
            if (closest_index >= this.step_separates.length) {
                closest_index = this.step_separates.length - 1
            }
            resultData = this.step_separates[closest_index]
            percent = this.step_percents[closest_index]
            var percentCss = percent * 100 + '%'
            if (this.is_vertical) {
                this.light.style.height = percentCss
                this.handler.style.bottom = percentCss
            } else {
                this.light.style.width = percentCss
                this.handler.style.left = percentCss
            }
            this.slider_box.dataset.value = resultData
            if (!this.is_initialize) {
                if (this.options) {
                    if (this.options.callback instanceof Function) {
                        this.options.callback(resultData)
                    }
                }
            }
        }
        //设置初始默认值
        if (this.options) {
            var default_data = parseFloat(this.options.default_data)
            if (default_data || default_data == 0) {
                this.setSliderData(default_data)
            } else {
                this.setSliderData(this.min_data)
            }
            this.is_initialize = false
        }
    }
    //用户公开的方法，设置 slider 值
    setSliderData(data) {
        if (data < this.min_data) {
            data = this.min_data
        }
        if (data > this.max_data) {
            data = this.max_data
        }
        var percent
        var min_differ = Number.MAX_VALUE
        for (var i = 0; i < this.step_separates.length; i++) {
            var crt_differ = Math.abs(data - this.step_separates[i])
            if (crt_differ < min_differ) {
                min_differ = crt_differ
                percent = this.step_percents[i]
            }
            if (crt_differ == 0) {
                break
            }
        }
        var move_val
        if (this.is_vertical) {
            move_val = parseFloat(this.slider_box.offsetHeight * percent)
        } else {
            move_val = parseFloat(this.slider_box.offsetWidth * percent)
        }
        this._setPosition(move_val)
    }
    //用户公开的方法，设置是否禁用
    setDisabled(is_disabled) {
        this.is_disabled = is_disabled
        if (is_disabled) {
            var attr_disabled = document.createAttribute("disabled")
            this.slider_box.attributes.setNamedItem(attr_disabled)
        } else {
            this.slider_box.attributes.removeNamedItem("disabled")
        }
    }
}