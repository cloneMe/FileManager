{
		"_comment": "IMPORTANT : go to the wiki page to know about options configuration https://github.com/simogeo/Filemanager/wiki/Filemanager-configuration-file",
    "options": {
        "culture": "en",
        "lang": "php",
        "theme": "flat-dark",
        "defaultViewMode": "grid",
        "autoload": true,
        "showFullPath": true,
        "showTitleAttr": false,
        "browseOnly": false,
        "showConfirmation": true,
        "showThumbs": true,
        "generateThumbnails": true,
        "cacheThumbnails": true,
        "searchBox": true,
        "listFiles": true,
        "fileSorting": "default",
        "chars_only_latin": true,
        "splitterWidth": 200,
        "splitterMinWidth": 200,
        "dateFormat": "d M Y H:i",
        "serverRoot": false,
        "fileRoot": "/downloads/rtorrent/",
        "baseUrl": false,
        "capabilities": ["select", "download", "rename", "delete", "replace"],
        "plugins": []
    },
    "security": {
        "allowFolderDownload": true,
        "allowChangeExtensions": true,
        "allowNoExtension": true,
        "uploadPolicy": "ALLOW_ALL",
        "uploadRestrictions": [
            "php"
        ]
    },
    "upload": {
        "multiple": true,
        "number": 5,
        "overwrite": false,
        "imagesOnly": false,
        "fileSizeLimit": -1
    },
    "exclude": {
        "unallowed_files": [
            ".htaccess",
            "web.config"
        ],
        "unallowed_dirs": [
            "_thumbs",
            ".CDN_ACCESS_LOGS",
            "cloudservers"
        ],
        "unallowed_files_REGEXP": "/^\\./",
        "unallowed_dirs_REGEXP": "/^\\./"
    },
    "images": {
        "imagesExt": [
            "jpg",
            "jpe",
            "jpeg",
            "gif",
            "png",
            "svg"
        ],
        "resize": {
        	"enabled":true,
        	"maxWidth": 1280,
          "maxHeight": 1024
        }
    },
    "videos": {
        "showVideoPlayer": true,
        "videosExt": [
            "ogv",
            "mp4",
            "webm",
            "m4v",
            "avi"
        ],
        "videosPlayerWidth": 400,
        "videosPlayerHeight": 222
    },
    "audios": {
        "showAudioPlayer": true,
        "audiosExt": [
            "ogg",
            "mp3",
            "wav",
            "flac"
        ]
    },
    "pdfs": {
        "showPdfReader": true,
        "pdfsExt": [
            "pdf",
            "odp"
        ],
	    "pdfsReaderWidth": "640",
        "pdfsReaderHeight": "480"
    },
    "edit": {
        "enabled": true,
        "lineNumbers": true,
        "lineWrapping": true,
        "codeHighlight": false,
        "theme": "elegant",
        "editExt": [
            "txt",
            "csv"
        ]
    },
    "customScrollbar": {
    	"enabled": true,
    	"theme": "inset-2-dark",
    	"button": true
    },
    "extras": {
        "extra_js": [],
        "extra_js_async": true
    },
    "icons": {
        "path": "images/fileicons/",
        "directory": "_Open.png",
        "default": "default.png"
    },
    "url": "https://github.com/simogeo/Filemanager",
    "version": "2.3.0"
}
