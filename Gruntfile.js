/**
 * @desc 使用grunt配置各项任务
 * @ v0.1 配置 cssmin 任务
 * @ v0.2 配置 uglify js任务
 */

module.exports = function(grunt){

	pkg: grunt.file.readJSON('package.json'),

	grunt.initConfig({
		cssmin: {
			minify: {
				expand: true, // 如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名
				cwd: 'css/', // 需要处理的文件（input）所在的目录
				src: ['*.css', '!*.min.css'], // 表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符
				dest: 'dest/css/', // 表示处理后的文件名或所在目录(output)
				ext: '.min.css' // 表示处理后的文件后缀名
			},
			combine: {
				files: {
					'dest/css/main.min.css': ['css/*.css'] // 前面是输出文件, 后面是输入文件, 将后面的文件合并为一个
				}
			}
		},

		uglify: {
			options: {
				// banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - '
				// + '<%= grunt.template.today("yyyy-mm-dd") %> */'
				compress: {
		        	drop_console: true  // 去掉源码中的 console 日志
		        }
			},
			target: {
				files: {
					// 'dest/js/main.min.js': ['js/*.js', 'js/!*.jquery-1.10.2.js', 'js/!*.require.js']
					'dest/js/floating_springFestival.min.js': ['js/floating_springFestival.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['cssmin:minify', 'cssmin:combine']);
	grunt.registerTask('uglifyjs',  ['uglify:target']);
};