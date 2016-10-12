/**
 * Contains the Image class, which represents an image widget.
 */
declare module "ui/image" {
    import dependencyObservable = require("ui/core/dependency-observable");
    import imageSource = require("image-source");
    import view = require("ui/core/view");

    /**
     * Represents a class that provides functionality for loading and streching image(s).
     */
    export class Image extends view.View {
        public static srcProperty: dependencyObservable.Property;
        public static imageSourceProperty: dependencyObservable.Property;
        public static isLoadingProperty: dependencyObservable.Property;
        public static stretchProperty: dependencyObservable.Property;

        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/widget/ImageView.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: any /* android.widget.ImageView */;

        /**
         * Gets the native iOS [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) that represents the user interface for this component. Valid only when running on iOS.
         */
        ios: any /* UIImageView */;

        /**
         * Gets or sets the image source of the image.
         */
        imageSource: imageSource.ImageSource;

        /**
         * Gets or sets the source of the Image. This can be either an URL string or a native image instance.
         */
        src: any;

        /**
         * Gets a value indicating if the image is currently loading
         */
        isLoading: boolean;

        /**
         * Gets or sets the image stretch mode.
         */
        stretch: string;
        
        /**
         * Gets or sets the loading strategy for images on the local file system:
         * - **sync** *(default)* - blocks the UI if necessary to display immediately, good for small icons.
         * - **async** - will try to load in the background, may appear with short delay, good for large images.
         */
        loadMode: string; // "sync" | "async";
    }
}