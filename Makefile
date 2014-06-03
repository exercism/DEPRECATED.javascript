# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(.git|node_modules|bin)$$"
ASSIGNMENTS = $(shell find . -maxdepth 1 -mindepth 1 -type d -exec basename {} \; | sort | grep -Ev $(IGNOREDIRS))

# output directories
TMPDIR ?= "/tmp"
OUTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")

# language specific config (tweakable per language)
FILEEXT := "js"
EXAMPLE := "example.$(FILEEXT)"
TSTFILE := "$(ASSIGNMENT)_test.spec.$(FILEEXT)"

# development dependencies
node_modules: package.json
	@npm prune
	@npm install

test-assignment: node_modules
	@echo "running tests for: $(ASSIGNMENT)"
	@cp $(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)
	@cp $(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(ASSIGNMENT).$(FILEEXT)
	@./node_modules/.bin/jasmine-node --captureExceptions $(OUTDIR)/$(TSTFILE)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done

