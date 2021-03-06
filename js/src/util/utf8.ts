// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import { toUint8Array } from './buffer';
import {
    TextDecoder as TextDecoderPolyfill,
    TextEncoder as TextEncoderPolyfill,
} from 'text-encoding-utf-8';

/** @suppress {missingRequire} */
const _Buffer = typeof Buffer === 'function' ? Buffer : null;
const useNativeEncoders = typeof TextDecoder === 'function' && typeof TextEncoder === 'function';

/** @ignore */
export const decodeUtf8 = ((TextDecoder) => {
    if (useNativeEncoders || !_Buffer) {
        const decoder = new TextDecoder();
        return decoder.decode.bind(decoder);
    }
    return (input: ArrayBufferLike | ArrayBufferView) => {
        const { buffer, byteOffset, length } = toUint8Array(input);
        return _Buffer.from(buffer, byteOffset, length).toString();
    };
})(typeof TextDecoder !== 'undefined' ? TextDecoder : TextDecoderPolyfill);

/** @ignore */
export const encodeUtf8 = ((TextEncoder) => {
    if (useNativeEncoders || !_Buffer) {
        const encoder = new TextEncoder();
        return encoder.encode.bind(encoder);
    }
    return (input = '') => toUint8Array(_Buffer.from(input, 'utf8'));
})(typeof TextEncoder !== 'undefined' ? TextEncoder : TextEncoderPolyfill);
