/*
 * Copyright (c) 2012-2015 S-Core Co., Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function foo(options) {
    var options = options || {}; // BAD_BITWISE_OPERATOR alarm
    console.log(options);


    if (typeof a === 'string') {
        console.log('It\'s an array!');
    }

    var options1 = options1 | {};
    var options2 = options2 | {};
    var options3 = options3 | {};
}
